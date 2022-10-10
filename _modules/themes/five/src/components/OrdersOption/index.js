"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _moment = _interopRequireDefault(require("moment"));
var _orderingComponents = require("ordering-components");
var _HorizontalOrdersLayout = require("../HorizontalOrdersLayout");
var _VerticalOrdersLayout = require("../../../../../components/VerticalOrdersLayout");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _PreviousBusinessOrdered = require("./PreviousBusinessOrdered");
var _PreviousProductsOrdered = require("./PreviousProductsOrdered");
var _BusinessController = require("../BusinessController");
var _SingleProductCard = require("../SingleProductCard");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _Confirm = require("../Confirm");
var _PreviousProfessionalOrdered = require("./PreviousProfessionalOrdered");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersOptionUI = function OrdersOptionUI(props) {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var horizontal = props.horizontal,
    activeOrders = props.activeOrders,
    orderList = props.orderList,
    pagination = props.pagination,
    isBusinessesPage = props.isBusinessesPage,
    loadMoreOrders = props.loadMoreOrders,
    titleContent = props.titleContent,
    customArray = props.customArray,
    onRedirectPage = props.onRedirectPage,
    businessesIds = props.businessesIds,
    orderStatus = props.orderStatus,
    isCustomLayout = props.isCustomLayout,
    isBusinessesLoading = props.isBusinessesLoading,
    pastOrders = props.pastOrders,
    preOrders = props.preOrders,
    selectItem = props.selectItem,
    setIsEmptyPast = props.setIsEmptyPast,
    setIsEmptyActive = props.setIsEmptyActive,
    setIsEmptyPreorder = props.setIsEmptyPreorder,
    isCustomerMode = props.isCustomerMode,
    handleUpdateOrderList = props.handleUpdateOrderList,
    reorderState = props.reorderState,
    handleReorder = props.handleReorder,
    isBusiness = props.isBusiness,
    isProducts = props.isProducts,
    isProfessionals = props.isProfessionals,
    businessOrderIds = props.businessOrderIds,
    products = props.products,
    hideOrders = props.hideOrders,
    onProductRedirect = props.onProductRedirect,
    businessesSearchList = props.businessesSearchList,
    handleUpdateProducts = props.handleUpdateProducts,
    onBusinessClick = props.onBusinessClick,
    professionals = props.professionals,
    handleUpdateProfessionals = props.handleUpdateProfessionals,
    businesses = props.businesses;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    carts = _useOrder2[0].carts;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var loading = orderList.loading,
    error = orderList.error,
    values = orderList.orders;
  var imageFails = activeOrders ? (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.emptyActiveOrders : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.emptyPastOrders;
  var orders = customArray || values || [];
  var isShowTitles = businessesIds ? orders && orders.length > 0 && !orders.map(function (order) {
    return businessesIds && businessesIds.includes(order.business_id);
  }).every(function (i) {
    return !i;
  }) : orders.length > 0;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loadingOrders = _useState2[0],
    setLoadingOrders = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var closeOrderModal = function closeOrderModal(e) {
    var outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target);
    if (outsideModal) {
      var _reorderState$result, _reorderState$result2, _reorderState$result3;
      var _businessId = 'businessId:' + (reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result = reorderState.result) === null || _reorderState$result === void 0 ? void 0 : _reorderState$result.business_id);
      sessionStorage.setItem('adjust-cart-products', _businessId);
      onRedirectPage && onRedirectPage({
        page: 'business',
        params: {
          store: reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result2 = reorderState.result) === null || _reorderState$result2 === void 0 ? void 0 : (_reorderState$result3 = _reorderState$result2.business) === null || _reorderState$result3 === void 0 ? void 0 : _reorderState$result3.slug
        }
      });
    }
  };
  var showSkeletons = !isBusiness && !isProducts && loading || (businesses === null || businesses === void 0 ? void 0 : businesses.loading) && isBusiness || (products === null || products === void 0 ? void 0 : products.length) === 0 && isProducts && (!businessesSearchList && loading || (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.loading));
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
  var onProductClick = function onProductClick(product, slug) {
    if (slug) {
      onProductRedirect({
        slug: slug,
        product: product.product_id,
        category: product.category_id
      });
      events.emit('product_clicked', product);
    } else {
      setAlertState({
        open: true,
        content: t('PRODUCT_HAS_NOT_BUSINESS_SLUG', 'The product selected has not business slug')
      });
    }
  };
  (0, _react.useEffect)(function () {
    var timeout;
    if (isCustomLayout) {
      timeout = setTimeout(function () {
        setLoadingOrders(false);
      }, 2000);
    }
    return function () {
      typeof timeout === 'number' && clearTimeout(timeout);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (loading) return;
    if (orders.length === 0) {
      activeOrders && setIsEmptyActive && setIsEmptyActive(true);
      pastOrders && setIsEmptyPast && setIsEmptyPast(true);
      preOrders && setIsEmptyPreorder && setIsEmptyPreorder(true);
    }
  }, [orders, activeOrders, pastOrders, preOrders]);
  (0, _react.useEffect)(function () {
    var _reorderState$result4;
    if (reorderState !== null && reorderState !== void 0 && reorderState.error) {
      window.addEventListener('click', closeOrderModal);
      return function () {
        window.removeEventListener('click', closeOrderModal);
      };
    }
    if (!(reorderState !== null && reorderState !== void 0 && reorderState.error) && reorderState.loading === false && reorderState !== null && reorderState !== void 0 && (_reorderState$result4 = reorderState.result) !== null && _reorderState$result4 !== void 0 && _reorderState$result4.business_id) {
      var _reorderState$result5, _carts$_businessId, _orders$find, _reorderState$result7;
      var _businessId = 'businessId:' + (reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result5 = reorderState.result) === null || _reorderState$result5 === void 0 ? void 0 : _reorderState$result5.business_id);
      var cartProducts = carts === null || carts === void 0 ? void 0 : (_carts$_businessId = carts[_businessId]) === null || _carts$_businessId === void 0 ? void 0 : _carts$_businessId.products;
      var available = cartProducts.every(function (product) {
        return product.valid === true;
      });
      var orderProducts = (_orders$find = orders.find(function (order) {
        var _reorderState$result6;
        return (order === null || order === void 0 ? void 0 : order.id) === (reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result6 = reorderState.result) === null || _reorderState$result6 === void 0 ? void 0 : _reorderState$result6.orderId);
      })) === null || _orders$find === void 0 ? void 0 : _orders$find.products;
      if (available && reorderState !== null && reorderState !== void 0 && (_reorderState$result7 = reorderState.result) !== null && _reorderState$result7 !== void 0 && _reorderState$result7.uuid && (cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length) === (orderProducts === null || orderProducts === void 0 ? void 0 : orderProducts.length)) {
        onRedirectPage && onRedirectPage({
          page: 'checkout',
          params: {
            cartUuid: reorderState === null || reorderState === void 0 ? void 0 : reorderState.result.uuid
          }
        });
      } else {
        var _reorderState$result8, _reorderState$result9;
        sessionStorage.setItem('adjust-cart-products', _businessId);
        (cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.length) !== (orderProducts === null || orderProducts === void 0 ? void 0 : orderProducts.length) && sessionStorage.setItem('already-removed', 'removed');
        onRedirectPage && onRedirectPage({
          page: 'business',
          params: {
            store: reorderState === null || reorderState === void 0 ? void 0 : (_reorderState$result8 = reorderState.result) === null || _reorderState$result8 === void 0 ? void 0 : (_reorderState$result9 = _reorderState$result8.business) === null || _reorderState$result9 === void 0 ? void 0 : _reorderState$result9.slug
          }
        });
      }
    }
  }, [reorderState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (isCustomLayout ? (isShowTitles || !isBusinessesPage) && !loadingOrders && !loading && !isBusinessesLoading : (isShowTitles || !isBusinessesPage) && !hideOrders) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orders.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.OptionTitle, {
    isBusinessesPage: isBusinessesPage
  }, /*#__PURE__*/_react.default.createElement("h1", null, titleContent || (activeOrders ? t('ACTIVE', 'Active') : pastOrders ? t('PAST', 'Past') : t('UPCOMING', 'Upcoming')))), !loading && orders.length === 0 && selectItem !== 'all' && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    image: imageFails,
    content: t('NO_RESULTS_FOUND', 'Sorry, no results found'),
    conditioned: true
  })), isBusiness && (businessOrderIds === null || businessOrderIds === void 0 ? void 0 : businessOrderIds.length) > 0 && /*#__PURE__*/_react.default.createElement(_PreviousBusinessOrdered.PreviousBusinessOrdered, {
    businesses: businesses,
    onRedirectPage: onRedirectPage,
    isLoadingOrders: loading
  }), isProducts && /*#__PURE__*/_react.default.createElement(_PreviousProductsOrdered.PreviousProductsOrdered, {
    products: products,
    onProductClick: onProductClick,
    handleUpdateProducts: handleUpdateProducts,
    onBusinessClick: onBusinessClick
  }), isProfessionals && /*#__PURE__*/_react.default.createElement(_PreviousProfessionalOrdered.PreviousProfessionalOrdered, {
    professionals: professionals,
    handleUpdateProfessionals: handleUpdateProfessionals
  }), (isCustomLayout ? loadingOrders || loading || (businesses === null || businesses === void 0 ? void 0 : businesses.loading) : showSkeletons) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businesses !== null && businesses !== void 0 && businesses.loading && isBusiness ? /*#__PURE__*/_react.default.createElement(_styles.BusinessControllerSkeleton, null, _toConsumableArray(Array(3).keys()).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      firstCard: i === 0 && width > 681
    });
  })) : loading && isProducts ? /*#__PURE__*/_react.default.createElement(_styles.ProductsListing, null, _toConsumableArray(Array(3).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: "skeleton:".concat(i),
      isSkeleton: true
    });
  })) : /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, {
    isSkeleton: true,
    activeOrders: horizontal,
    isBusinessesPage: isBusinessesPage
  }, horizontal ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonOrder, {
    activeOrders: horizontal,
    isBusinessesPage: isBusinessesPage
  }, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonContent, {
      activeOrders: horizontal
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 70
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    }))), /*#__PURE__*/_react.default.createElement(_styles.SkeletonButton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)));
  })) : _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonOrder, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonContent, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonInformation, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 70
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))), /*#__PURE__*/_react.default.createElement(_styles.SkeletonReorder, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))));
  }))), (isCustomLayout ? !loadingOrders && !loading && !error && orders.length > 0 && !isBusinessesLoading && !hideOrders : !loading && !error && orders.length > 0 && !hideOrders) && (horizontal ? /*#__PURE__*/_react.default.createElement(_HorizontalOrdersLayout.HorizontalOrdersLayout, {
    businessesIds: businessesIds,
    orders: orders.filter(function (order) {
      return orderStatus.includes(order.status);
    }).sort(function (a, b) {
      return (0, _moment.default)(b === null || b === void 0 ? void 0 : b.delivery_datetime_utc).valueOf() - (0, _moment.default)(a === null || a === void 0 ? void 0 : a.delivery_datetime_utc).valueOf();
    }),
    pagination: pagination,
    onRedirectPage: onRedirectPage,
    loadMoreOrders: loadMoreOrders,
    isBusinessesPage: isBusinessesPage,
    reorderLoading: reorderState === null || reorderState === void 0 ? void 0 : reorderState.loading,
    customArray: customArray,
    getOrderStatus: getOrderStatus,
    handleReorder: handleReorder,
    activeOrders: activeOrders,
    handleUpdateOrderList: handleUpdateOrderList,
    pastOrders: pastOrders,
    isCustomerMode: isCustomerMode,
    isBusiness: isBusiness,
    isProducts: isProducts
  }) : /*#__PURE__*/_react.default.createElement(_VerticalOrdersLayout.VerticalOrdersLayout, {
    reorderLoading: reorderState === null || reorderState === void 0 ? void 0 : reorderState.loading,
    orders: orders.filter(function (order) {
      return orderStatus.includes(order.status);
    }).sort(function (a, b) {
      return (0, _moment.default)(b === null || b === void 0 ? void 0 : b.delivery_datetime_utc).valueOf() - (0, _moment.default)(a === null || a === void 0 ? void 0 : a.delivery_datetime_utc).valueOf();
    }),
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    onRedirectPage: onRedirectPage,
    getOrderStatus: getOrderStatus,
    handleReorder: handleReorder
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('MY_ORDERS', 'My orders'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var OrdersOption = function OrdersOption(props) {
  var getAllOrders = props.activeOrders && props.pastOrders && props.preOrders;
  var orderListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersOptionUI,
    orderStatus: getAllOrders ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] : props.activeOrders ? [0, 3, 4, 7, 8, 9, 14, 18, 19, 20, 21, 22, 23] : props.pastOrders ? [1, 2, 5, 6, 10, 11, 12, 15, 16, 17] : [13],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: getAllOrders ? 30 : 10,
      controlType: 'infinity'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderList, orderListProps);
};
exports.OrdersOption = OrdersOption;