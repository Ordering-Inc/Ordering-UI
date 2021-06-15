"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponents = require("ordering-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to control a address list
 * @param {object} props Props of AddressList component
 */
var AddressList = function AddressList(props) {
  var UIComponent = props.UIComponent,
      changeOrderAddressWithDefault = props.changeOrderAddressWithDefault,
      handleClickSetDefault = props.handleClickSetDefault,
      handleClickDelete = props.handleClickDelete;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token;

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      setUserCustomer = _useCustomer2[1].setUserCustomer;

  var userId = props.userId || (user === null || user === void 0 ? void 0 : user.id);
  var accessToken = props.accessToken || token;

  if (!userId) {
    throw new Error('`userId` must provide from props or use SessionProviver to wrappe the app.');
  }

  if (!accessToken) {
    throw new Error('`accessToken` must provide from props or use SessionProviver to wrappe the app.');
  }

  var _useState = (0, _react.useState)({
    loading: true,
    error: null,
    addresses: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      addressList = _useState2[0],
      setAddressList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      actionStatus = _useState4[0],
      setActionStatus = _useState4[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      changeAddress = _useOrder2[1].changeAddress;

  var requestsState = {};
  /**
   * Function to load addresses from API
   */

  var loadAddresses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var source, _yield$ordering$setAc, content;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
                loading: true
              }));
              source = {};
              requestsState.list = source;
              _context.next = 6;
              return ordering.setAccessToken(accessToken).users(userId).addresses().get({
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc = _context.sent;
              content = _yield$ordering$setAc.content;
              setAddressList({
                loading: false,
                error: content.error ? content.result : null,
                addresses: content.error ? [] : Array.isArray(content.result) ? content.result : []
              });
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
                  loading: false,
                  error: [_context.t0.message]
                }));
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function loadAddresses() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    loadAddresses();
    return function () {
      if (requestsState.list) {
        requestsState.list.cancel();
      }
    };
  }, []);
  /**
   * Function to make an address as default address
   * @param {object} address Address to make as default
   */

  var handleSetDefault = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(address, userCustomerSetup, sameAddress) {
      var _yield$ordering$setAc2, content;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (userCustomerSetup) {
                setUserCustomer(_objectSpread(_objectSpread({}, userCustomerSetup), {}, {
                  address: address === null || address === void 0 ? void 0 : address.address,
                  address_notes: address === null || address === void 0 ? void 0 : address.address_notes,
                  internal_number: address === null || address === void 0 ? void 0 : address.internal_number,
                  zipcode: address === null || address === void 0 ? void 0 : address.zipcode
                }), true);
              }

              if (!handleClickSetDefault) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", handleClickSetDefault(address));

            case 3:
              if (!sameAddress) {
                _context2.next = 6;
                break;
              }

              changeAddress(address === null || address === void 0 ? void 0 : address.id);
              return _context2.abrupt("return");

            case 6:
              _context2.prev = 6;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              _context2.next = 10;
              return ordering.setAccessToken(accessToken).users(userId).addresses(address.id).save({
                default: true
              });

            case 10:
              _yield$ordering$setAc2 = _context2.sent;
              content = _yield$ordering$setAc2.content;
              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });

              if (!content.error && content.result.default) {
                addressList.addresses.map(function (_address) {
                  _address.default = _address.id === address.id;
                  return _address;
                });

                if (changeOrderAddressWithDefault) {
                  changeAddress(content.result.id);
                }

                setAddressList(_objectSpread({}, addressList));
              }

              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](6);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[6, 16]]);
    }));

    return function handleSetDefault(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Function to delete an address
   * @param {object} address Address to delete
   */


  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(address) {
      var _yield$ordering$users, content, addresses;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!handleClickDelete) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", handleClickDelete(address));

            case 2:
              _context3.prev = 2;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              _context3.next = 6;
              return ordering.users(userId).addresses(address.id).delete({
                accessToken: accessToken
              });

            case 6:
              _yield$ordering$users = _context3.sent;
              content = _yield$ordering$users.content;
              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });

              if (!content.error) {
                addresses = addressList.addresses.filter(function (_address) {
                  return _address.id !== address.id;
                });
                setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
                  addresses: addresses
                }));
              }

              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](2);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 12]]);
    }));

    return function handleDelete(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    addressList: addressList,
    setAddressList: setAddressList,
    actionStatus: actionStatus,
    handleSetDefault: handleSetDefault,
    handleDelete: handleDelete
  })));
};

exports.AddressList = AddressList;
AddressList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Behavior when click on address
   * @param {object} address Addres that was clicked
   */
  handleClickAddress: _propTypes.default.func,

  /**
   * Custom set default address
   * @param {object} address Address to make to as default
   */
  handleClickSetDefault: _propTypes.default.func,

  /**
   * Custom delete address
   * @param {object} address Address to make to as default
   */
  handleClickDelete: _propTypes.default.func,

  /**
   * User id to get address from this user
   * If you don't provide one it is used by the current session by default
   */
  userId: _propTypes.default.number,

  /**
   * Access token to get addresses
   * If you don't provide one it is used by the current session by default
   */
  accessToken: _propTypes.default.string,

  /**
   * Components types before addresses list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after addresses list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before addresses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after addresses list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AddressList.defaultProps = {
  changeOrderAddressWithDefault: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};