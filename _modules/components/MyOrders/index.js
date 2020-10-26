"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyOrders = exports.MyOrdersUI = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _ProfileOptions = require("../UserProfileForm/ProfileOptions");

var _Buttons = require("../../styles/Buttons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MyOrdersUI = function MyOrdersUI(props) {
  var activeOrders = props.activeOrders,
      previousOrders = props.previousOrders;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      reorder = _useOrder2[1].reorder;

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var googleMapKey = 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk';

  var getGoogleMapImage = function getGoogleMapImage(_ref) {
    var lat = _ref.lat,
        lng = _ref.lng;
    return "https://maps.googleapis.com/maps/api/staticmap?size=500x190&center=".concat(lat, ",").concat(lng, "&zoom=17&scale=2&maptype=roadmap&&markers=icon:https://res.cloudinary.com/ditpjbrmz/image/upload/f_auto,q_auto,w_45,q_auto:best,q_auto:best/v1564675872/marker-customer_kvxric.png%7Ccolor:white%7C").concat(lat, ",").concat(lng, "&key=").concat(googleMapKey);
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      reorderLoading = _useState2[0],
      setReorderLoading = _useState2[1];

  var handleReorder = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(orderId) {
      var _yield$reorder, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setReorderLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return reorder(orderId);

            case 4:
              _yield$reorder = _context.sent;
              error = _yield$reorder.error;
              result = _yield$reorder.result;

              if (!error) {
                events.emit('go_to_page', {
                  page: 'checkout',
                  params: {
                    cartUuid: result.uuid
                  }
                });
              }

              setReorderLoading(false);
              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              setReorderLoading(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function handleReorder(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProfileOptions.ProfileOptions, {
    value: "My Orders"
  }), !activeOrders.loading && !previousOrders.loading && activeOrders.orders.length === 0 && previousOrders.orders.length === 0 || previousOrders.error || activeOrders.error ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, previousOrders.error || activeOrders.error ? /*#__PURE__*/_react.default.createElement("h2", null, t('ERROR_UNKNOWN', 'An error has ocurred')) : /*#__PURE__*/_react.default.createElement("h2", null, t('ORDERS_NOT_FOUND', 'Not Found Orders'))) : /*#__PURE__*/_react.default.createElement(_styles.MyOrdersContainer, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MyOrdersTitle, null, !activeOrders.loading ? /*#__PURE__*/_react.default.createElement("h3", null, t('ACTIVE_ORDERS', 'Active Orders')) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 20
  })), /*#__PURE__*/_react.default.createElement(_styles.ActiveOrders, null, !activeOrders.loading ? activeOrders.orders.map(function (order) {
    var _order$business, _order$business2;

    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: order.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement("img", {
      src: getGoogleMapImage(order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location),
      alt: "google-maps-img"
    })), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement("h5", null, order.business.name), /*#__PURE__*/_react.default.createElement("p", null, "Order No. ", order.id), /*#__PURE__*/_react.default.createElement("p", null, order.created_at)), /*#__PURE__*/_react.default.createElement(_styles.Price, null, /*#__PURE__*/_react.default.createElement("h5", null, "$", order.products.reduce(function (acc, cur) {
      return acc + cur.price;
    }, 0)), /*#__PURE__*/_react.default.createElement("p", null, order.status === 0 ? t('ORDER_PENDING', 'pending') : ''))), /*#__PURE__*/_react.default.createElement(_styles.OpenOrder, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleGoToPage({
          page: 'order_detail',
          params: {
            orderId: order.id
          }
        });
      }
    }, t('OPEN_ORDER', 'Open order'))));
  }) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonOrder, null, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonMap, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 400,
      height: 100
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 70
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    }))));
  })))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MyOrdersTitle, null, !previousOrders.loading ? /*#__PURE__*/_react.default.createElement("h3", null, t('ORDERS_PAST', 'My Orders Past')) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 20
  })), /*#__PURE__*/_react.default.createElement(_styles.OrdersPast, null, !previousOrders.loading ? previousOrders.orders.map(function (order) {
    var _order$business3;

    return /*#__PURE__*/_react.default.createElement(_styles.IndividualOrderPast, {
      key: order.id
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderPastContent, null, /*#__PURE__*/_react.default.createElement(_styles.Logo, {
      name: "order_past"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement("h5", null, order.business.name), /*#__PURE__*/_react.default.createElement("p", null, order.created_at), /*#__PURE__*/_react.default.createElement("p", {
      onClick: function onClick() {
        return handleGoToPage({
          page: 'order_detail',
          params: {
            orderId: order.id
          }
        });
      },
      name: "view"
    }, t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')))), /*#__PURE__*/_react.default.createElement(_styles.Reorder, null, /*#__PURE__*/_react.default.createElement("p", null, order.status === 1 || order.status === 11 ? t('ORDER_COMPLETED', 'Complete') : ''), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleReorder(order.id);
      },
      disabled: reorderLoading
    }, reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))));
  }) : _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonOrdersPast, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonContent, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 70
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonReorder, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 40
    }))));
  })))));
};

exports.MyOrdersUI = MyOrdersUI;

var MyOrders = function MyOrders(props) {
  var MyOrdersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MyOrdersUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MyOrders, MyOrdersProps);
};

exports.MyOrders = MyOrders;