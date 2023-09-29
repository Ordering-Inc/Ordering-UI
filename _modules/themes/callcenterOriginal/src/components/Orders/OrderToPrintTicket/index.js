"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderToPrintTicket = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../../../../../utils");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderToPrintTicket = exports.OrderToPrintTicket = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _configs$driver_tip_t, _configs$driver_tip_u, _order$summary, _replace$trim, _ref2, _order$customer$name, _order$customer, _order$customer$middl, _order$customer2, _order$customer$lastn, _order$customer3, _order$customer$secon, _order$customer4, _getOrderStatus, _order$paymethod, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _order$customer11, _order$customer12, _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$business8, _order$business9, _order$products, _order$products2, _ref3, _order$summary2, _order$summary3, _order$summary$subtot, _order$summary4, _order$summary5, _order$summary6, _order$summary7, _order$summary8, _order$summary$tax, _order$summary9, _order$summary10, _order$summary11, _order$summary$driver, _order$summary12, _order$summary13, _order$summary$servic, _order$summary14, _order$summary$total, _order$summary15;
  var order = props.order,
    getOrderStatus = props.getOrderStatus;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDate = _useUtils2$.parseDate,
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber;
  var deliveryStatus = {
    1: t('DELIVERY', 'Delivery'),
    2: t('PICK_UP', 'Pick up'),
    3: t('EAT_IN', 'Eat In'),
    4: t('CURBSIDE', 'Curbside'),
    5: t('DRIVER_THRU', 'Driver thru')
  };
  var getProductPrice = function getProductPrice(product) {
    var subOptionPrice = 0;
    if (Array.isArray(product.options)) {
      var _product$options;
      if (((_product$options = product.options) === null || _product$options === void 0 ? void 0 : _product$options.length) > 0) {
        var _iterator = _createForOfIteratorHelper(product.options),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var option = _step.value;
            var _iterator2 = _createForOfIteratorHelper(option.suboptions),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var suboption = _step2.value;
                subOptionPrice += suboption.quantity * suboption.price;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    var price = product.quantity * (product.price + subOptionPrice);
    return parseFloat(price.toFixed(2));
  };
  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref) {
    var quantity = _ref.quantity,
      name = _ref.name,
      position = _ref.position,
      price = _ref.price;
    if (name !== 'No') {
      var pos = position && position !== 'whole' ? "(".concat(t(position.toUpperCase(), position), ")") : '';
      return pos ? "".concat(quantity, " x ").concat(name, " ").concat(pos, " + ").concat(parsePrice(price)) : "".concat(quantity, " x ").concat(name, " + ").concat(parsePrice(price));
    } else {
      return 'No';
    }
  };
  var getSuboptions = function getSuboptions(suboptions) {
    var array = [];
    (suboptions === null || suboptions === void 0 ? void 0 : suboptions.length) > 0 && (suboptions === null || suboptions === void 0 ? void 0 : suboptions.map(function (suboption) {
      var string = "".concat(getFormattedSubOptionName(suboption));
      array.push(string);
    }));
    return array.join('');
  };
  var getOptions = function getOptions(options) {
    var productComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var array = [];
    (options === null || options === void 0 ? void 0 : options.length) && (options === null || options === void 0 ? void 0 : options.map(function (option) {
      var string = "".concat(option.name, " ").concat(getSuboptions(option.suboptions));
      array.push(string);
    }));
    if (productComment) {
      array.push("".concat(t('COMMENT', 'Comment')).concat(productComment));
    }
    return array;
  };
  var percentTip = parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && (0, _utils.verifyDecimals)(order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.driver_tip, parseNumber);
  var customerName = (_replace$trim = (_ref2 = "".concat((_order$customer$name = order === null || order === void 0 || (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.name) !== null && _order$customer$name !== void 0 ? _order$customer$name : '', " ").concat((_order$customer$middl = order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.middle_name) !== null && _order$customer$middl !== void 0 ? _order$customer$middl : '', " ").concat((_order$customer$lastn = order === null || order === void 0 || (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.lastname) !== null && _order$customer$lastn !== void 0 ? _order$customer$lastn : '', " ").concat((_order$customer$secon = order === null || order === void 0 || (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.second_lastname) !== null && _order$customer$secon !== void 0 ? _order$customer$secon : '')) === null || _ref2 === void 0 || (_ref2 = _ref2.replace('  ', ' ')) === null || _ref2 === void 0 ? void 0 : _ref2.trim()) !== null && _replace$trim !== void 0 ? _replace$trim : '';
  return /*#__PURE__*/_react.default.createElement(_styles.PrintContainer, {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_NO', 'Order No.'), " ", order.id), /*#__PURE__*/_react.default.createElement(_styles.PrintTextContainer, null, (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value, /*#__PURE__*/_react.default.createElement("br", null), t('DELIVERY_TYPE', 'Delivery Type'), ": ", deliveryStatus[order === null || order === void 0 ? void 0 : order.delivery_type], /*#__PURE__*/_react.default.createElement("br", null), t('DELIVERY_DATE', 'Delivery Date'), ": ", order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }), /*#__PURE__*/_react.default.createElement("br", null), t('PAYMENT_METHOD'), ": ", order === null || order === void 0 || (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.name), /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer details')), /*#__PURE__*/_react.default.createElement(_styles.PrintTextContainer, null, t('FULL_NAME', 'Full Name'), ": ", customerName, /*#__PURE__*/_react.default.createElement("br", null), t('EMAIL', 'Email'), ": ", order === null || order === void 0 || (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.email, /*#__PURE__*/_react.default.createElement("br", null), t('MOBILE_PHONE', 'Mobile Phone'), ": ", order === null || order === void 0 || (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.cellphone, /*#__PURE__*/_react.default.createElement("br", null), !!(order !== null && order !== void 0 && (_order$customer7 = order.customer) !== null && _order$customer7 !== void 0 && _order$customer7.phone) && "".concat(t('MOBILE_PHONE', 'Mobile Phone'), ": ").concat(order === null || order === void 0 || (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.phone), t('FULL_ADDRESS', 'Full Addres'), ": ", order === null || order === void 0 || (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.address, !!(order !== null && order !== void 0 && (_order$customer10 = order.customer) !== null && _order$customer10 !== void 0 && _order$customer10.internal_number) && "".concat(t('INTERNAL_NUMBER', 'Internal Number'), ": ").concat(order === null || order === void 0 || (_order$customer11 = order.customer) === null || _order$customer11 === void 0 ? void 0 : _order$customer11.internal_number), /*#__PURE__*/_react.default.createElement("br", null), !!(order !== null && order !== void 0 && (_order$customer12 = order.customer) !== null && _order$customer12 !== void 0 && _order$customer12.zipcode) && "".concat(t('ZIPCODE', 'Zipcode'), ": ").concat(order === null || order === void 0 ? void 0 : order.customer.zipcode)), /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business details')), /*#__PURE__*/_react.default.createElement(_styles.PrintTextContainer, null, order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name, /*#__PURE__*/_react.default.createElement("br", null), order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.email, /*#__PURE__*/_react.default.createElement("br", null), !!(order !== null && order !== void 0 && (_order$business3 = order.business) !== null && _order$business3 !== void 0 && _order$business3.cellphone) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "".concat(t('BUSINESS_PHONE', 'Business cellphone'), ": ").concat(order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.cellphone), /*#__PURE__*/_react.default.createElement("br", null)), !!(order !== null && order !== void 0 && (_order$business5 = order.business) !== null && _order$business5 !== void 0 && _order$business5.phone) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "".concat(t('BUSINESS_PHONE', 'Business Phone'), ": ").concat(order === null || order === void 0 || (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.phone), /*#__PURE__*/_react.default.createElement("br", null)), t('ADDRESS', 'Address'), ": ", order === null || order === void 0 || (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.address, /*#__PURE__*/_react.default.createElement("br", null), !!(order !== null && order !== void 0 && (_order$business8 = order.business) !== null && _order$business8 !== void 0 && _order$business8.address_notes) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "".concat(t('SPECIAL_ADDRESS', 'Special Address'), ": ").concat(order === null || order === void 0 || (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.address_notes), /*#__PURE__*/_react.default.createElement("br", null))), /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_DETAILS', 'Order Details')), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_styles.PrintProductsContainer, null, (order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 || (_order$products2 = order.products) === null || _order$products2 === void 0 ? void 0 : _order$products2.map(function (product, i) {
    var _product$total, _getOptions;
    return /*#__PURE__*/_react.default.createElement(_styles.PrintProducts, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.Products, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, "".concat(product === null || product === void 0 ? void 0 : product.quantity, "x ").concat(product === null || product === void 0 ? void 0 : product.name)), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_product$total = product === null || product === void 0 ? void 0 : product.total) !== null && _product$total !== void 0 ? _product$total : getProductPrice(product)))), /*#__PURE__*/_react.default.createElement(_styles.ProdcutCommentsContainer, null, (_getOptions = getOptions(product === null || product === void 0 ? void 0 : product.options, product === null || product === void 0 ? void 0 : product.comment)) === null || _getOptions === void 0 ? void 0 : _getOptions.map(function (option, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.ProductComments, {
        key: i
      }, option);
    })));
  }))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((order === null || order === void 0 ? void 0 : order.tax_type) === 1 ? (_ref3 = (order === null || order === void 0 || (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.subtotal) + (order === null || order === void 0 || (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.tax)) !== null && _ref3 !== void 0 ? _ref3 : 0 : (_order$summary$subtot = order === null || order === void 0 || (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.subtotal) !== null && _order$summary$subtot !== void 0 ? _order$summary$subtot : 0))), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, (order === null || order === void 0 || (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.discount) > 0 ? (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('DISCOUNT', 'Discount'), " (", (0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.offer_rate, parsePrice), "%)") : /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, " ", t('DISCOUNT', 'Discount')) : '', (order === null || order === void 0 || (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.discount) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, "- ", parsePrice(order === null || order === void 0 || (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.discount)) : ''), (order === null || order === void 0 ? void 0 : order.tax_type) !== 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('TAX', 'Tax'), ' ', "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 || (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.tax_rate, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$tax = order === null || order === void 0 || (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.tax) !== null && _order$summary$tax !== void 0 ? _order$summary$tax : 0)))), (order === null || order === void 0 || (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.delivery_price) > 0 && /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice(order === null || order === void 0 || (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.delivery_price))), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('DRIVER_TIP', 'Driver tip'), percentTip ? "(".concat(percentTip, "%)") : ''), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$driver = order === null || order === void 0 || (_order$summary12 = order.summary) === null || _order$summary12 === void 0 ? void 0 : _order$summary12.driver_tip) !== null && _order$summary$driver !== void 0 ? _order$summary$driver : 0))), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('SERVICE_FEE', 'Service Fee'), "(", (0, _utils.verifyDecimals)(order === null || order === void 0 || (_order$summary13 = order.summary) === null || _order$summary13 === void 0 ? void 0 : _order$summary13.service_fee, parseNumber), "%)"), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$servic = order === null || order === void 0 || (_order$summary14 = order.summary) === null || _order$summary14 === void 0 ? void 0 : _order$summary14.service_fee) !== null && _order$summary$servic !== void 0 ? _order$summary$servic : 0))), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InsideInfo, null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement(_styles.InsideInfo2, null, parsePrice((_order$summary$total = order === null || order === void 0 || (_order$summary15 = order.summary) === null || _order$summary15 === void 0 ? void 0 : _order$summary15.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : 0))));
});