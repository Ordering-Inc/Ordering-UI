"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteOrders = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _naked = require("./naked");

var _NotFoundSource = require("../NotFoundSource");

var _Buttons = require("../../styles/Buttons");

var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));

var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));

var _styledComponents = require("styled-components");

var _styles = require("./styles");

var _react2 = require("swiper/react");

var _swiper = _interopRequireWildcard(require("swiper"));

require("swiper/swiper-bundle.min.css");

require("swiper/swiper.min.css");

var _SingleOrderCard = require("../SingleOrderCard");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_swiper.default.use([_swiper.Navigation]);

var FavoriteOrdersUI = function FavoriteOrdersUI(props) {
  var _props$beforeElements, _props$beforeComponen, _favoriteOrderList$or, _favoriteOrderList$or2, _favoriteOrderList$pr, _props$afterComponent, _props$afterElements;

  var handleUpdateOrderList = props.handleUpdateOrderList,
      favoriteOrderList = props.favoriteOrderList,
      pagination = props.pagination,
      getFavoriteOrderList = props.getFavoriteOrderList;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      reorderLoading = _useState2[0],
      setReorderLoading = _useState2[1];

  var pastOrders = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      reorder = _useOrder2[1].reorder;

  var handleGoToOrderList = function handleGoToOrderList() {
    events.emit('go_to_page', {
      page: 'orders'
    });
  };

  var getOrderStatus = function getOrderStatus(s) {
    var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _theme$defaultLanguag17, _theme$defaultLanguag18, _theme$defaultLanguag19, _theme$defaultLanguag20, _theme$defaultLanguag21, _theme$defaultLanguag22, _theme$defaultLanguag23, _theme$defaultLanguag24;

    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.PENDING) || 'Pending')
    }, {
      key: 1,
      value: t('COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.COMPLETED) || 'Completed')
    }, {
      key: 2,
      value: t('REJECTED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.REJECTED) || 'Rejected')
    }, {
      key: 3,
      value: t('DRIVER_IN_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DRIVER_IN_BUSINESS) || 'Driver in business')
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.PREPARATION_COMPLETED) || 'Preparation Completed')
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.REJECTED_BY_BUSINESS) || 'Rejected by business')
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.REJECTED_BY_DRIVER) || 'Rejected by Driver')
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ACCEPTED_BY_BUSINESS) || 'Accepted by business')
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPTED_BY_DRIVER) || 'Accepted by driver')
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.PICK_UP_COMPLETED_BY_DRIVER) || 'Pick up completed by driver')
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.PICK_UP_FAILED_BY_DRIVER) || 'Pick up Failed by driver')
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.DELIVERY_COMPLETED_BY_DRIVER) || 'Delivery completed by driver')
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.DELIVERY_FAILED_BY_DRIVER) || 'Delivery Failed by driver')
    }, {
      key: 13,
      value: t('PREORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.PREORDER) || 'PreOrder')
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ORDER_NOT_READY) || 'Order not ready')
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer')
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer')
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag18 = theme.defaultLanguages) === null || _theme$defaultLanguag18 === void 0 ? void 0 : _theme$defaultLanguag18.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer')
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag19 = theme.defaultLanguages) === null || _theme$defaultLanguag19 === void 0 ? void 0 : _theme$defaultLanguag19.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) || 'Driver almost arrived to business')
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag20 = theme.defaultLanguages) === null || _theme$defaultLanguag20 === void 0 ? void 0 : _theme$defaultLanguag20.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) || 'Driver almost arrived to customer')
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag21 = theme.defaultLanguages) === null || _theme$defaultLanguag21 === void 0 ? void 0 : _theme$defaultLanguag21.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business')
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag22 = theme.defaultLanguages) === null || _theme$defaultLanguag22 === void 0 ? void 0 : _theme$defaultLanguag22.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business')
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag23 = theme.defaultLanguages) === null || _theme$defaultLanguag23 === void 0 ? void 0 : _theme$defaultLanguag23.ORDER_LOOKING_FOR_DRIVER) || 'Looking for driver')
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag24 = theme.defaultLanguages) === null || _theme$defaultLanguag24 === void 0 ? void 0 : _theme$defaultLanguag24.ORDER_DRIVER_ON_WAY) || 'Driver on way')
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var onRedirectPage = function onRedirectPage(data) {
    events.emit('go_to_page', data);
  };

  var handleReorder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(orderId) {
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

              if (error) {
                _context.next = 10;
                break;
              }

              onRedirectPage && onRedirectPage({
                page: 'checkout',
                params: {
                  cartUuid: result.uuid
                }
              });
              return _context.abrupt("return");

            case 10:
              setReorderLoading(false);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              setReorderLoading(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function handleReorder(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, !(favoriteOrderList !== null && favoriteOrderList !== void 0 && favoriteOrderList.loading) && (favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : (_favoriteOrderList$or = favoriteOrderList.orders) === null || _favoriteOrderList$or === void 0 ? void 0 : _favoriteOrderList$or.length) === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return handleGoToOrderList();
    },
    style: {
      height: '44px'
    }
  }, t('ADD_FAVORITE', 'Add favorite'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ArrowButtonWrapper, {
    className: "swiper-button-prev",
    isLoading: favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : favoriteOrderList.loading
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_react2.Swiper, {
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    freeMode: true,
    watchSlidesProgress: true,
    className: "swiper-businesses",
    preventClicksPropagation: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }, !(favoriteOrderList !== null && favoriteOrderList !== void 0 && favoriteOrderList.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : (_favoriteOrderList$or2 = favoriteOrderList.orders) === null || _favoriteOrderList$or2 === void 0 ? void 0 : _favoriteOrderList$or2.map(function (order, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_SingleOrderCard.SingleOrderCard, {
      order: order,
      onRedirectPage: onRedirectPage,
      getOrderStatus: getOrderStatus,
      pastOrders: pastOrders.includes(order === null || order === void 0 ? void 0 : order.status),
      handleReorder: handleReorder,
      handleUpdateOrderList: handleUpdateOrderList
    }));
  }), (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) < (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, null, /*#__PURE__*/_react.default.createElement(_styles.LoadMoreCard, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return getFavoriteOrderList((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) + 1);
    }
  }, t('LOAD_MORE_ORDERS', 'Load more orders'))))), (favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : favoriteOrderList.loading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_react2.SwiperSlide, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_SingleOrderCard.SingleOrderCard, {
      isSkeleton: true,
      order: {},
      onRedirectPage: onRedirectPage,
      getOrderStatus: getOrderStatus,
      handleReorder: handleReorder
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles.ArrowButtonWrapper, {
    className: "swiper-button-next",
    isLoading: favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : favoriteOrderList.loading
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null))), (favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : favoriteOrderList.error) && (favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : favoriteOrderList.error.length) > 0 && (favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : (_favoriteOrderList$pr = favoriteOrderList.products) === null || _favoriteOrderList$pr === void 0 ? void 0 : _favoriteOrderList$pr.length) === 0 && (favoriteOrderList === null || favoriteOrderList === void 0 ? void 0 : favoriteOrderList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var FavoriteOrders = function FavoriteOrders(props) {
  var favoriteOrdersProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: FavoriteOrdersUI
  });

  return /*#__PURE__*/_react.default.createElement(_naked.FavoriteOrders, favoriteOrdersProps);
};

exports.FavoriteOrders = FavoriteOrders;