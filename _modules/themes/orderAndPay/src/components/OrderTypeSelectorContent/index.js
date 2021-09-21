"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorContent = exports.OrderTypeSelectorContentUI = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styledComponents = require("styled-components");

var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));

var _BsArrowLeft = _interopRequireDefault(require("@meronex/icons/bs/BsArrowLeft"));

var _Modal = require("../Modal");

var _styles = require("./styles");

var _Inputs = require("../../../../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _Confirm = require("../Confirm");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderTypeSelectorContentUI = function OrderTypeSelectorContentUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var handleChangeOrderType = props.handleChangeOrderType,
      orderTypes = props.orderTypes,
      onClose = props.onClose,
      logo = props.logo,
      handleBusinessPage = props.handleBusinessPage,
      businessId = props.businessId;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderStatus = _useOrder2[0];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      orderTypeSelected = _useState2[0],
      setOrderTypeSelected = _useState2[1];

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1]; // const [pagination, setPagination] = useState({})


  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      places = _useState6[0],
      setPlaces = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      placeId = _useState8[0],
      setPlaceId = _useState8[1];

  var inputRef = (0, _react.useRef)();

  var handleClickOrderType = function handleClickOrderType(_ref) {
    var value = _ref.value,
        text = _ref.text,
        label = _ref.label;

    if (!label) {
      handleBusinessPage();
      return;
    }

    onClose && onClose();
    handleChangeOrderType && handleChangeOrderType(value);
    setOrderTypeSelected({
      open: true,
      type: text,
      label: label
    });
  };

  var getPlaces = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var response, _yield$response$json, result, error;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("".concat(ordering.root, "/business/").concat(businessId, "/places"));

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              error = _yield$response$json.error;

              if (error) {
                setAlertState({
                  open: true,
                  content: result
                });
              } else {
                setPlaces(result.map(function (place) {
                  return {
                    name: place.name,
                    id: place.id,
                    enabled: place.enabled
                  };
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setAlertState({
                open: true,
                content: _context.t0.message
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getPlaces() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChangePlace = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (placeId) {
                _context2.next = 3;
                break;
              }

              setAlertState({
                open: true,
                content: [t('PLACE_ID_REQURED', 'Place id is required')]
              });
              return _context2.abrupt("return");

            case 3:
              if (!places.some(function (place) {
                return place.id === parseInt(placeId);
              })) {
                _context2.next = 9;
                break;
              }

              _context2.next = 6;
              return window.localStorage.setItem('place_id', placeId);

            case 6:
              handleBusinessPage();
              _context2.next = 10;
              break;

            case 9:
              setAlertState({
                open: true,
                content: [t('THE_PLACES_NOT_EXISTS', 'The place does not exists')]
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleChangePlace() {
      return _ref3.apply(this, arguments);
    };
  }();

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  var onChangePlaceId = function onChangePlaceId(e) {
    inputRef.current.value = inputRef.current.value.replace(/[^0-9.]+/g, '');
    setPlaceId(e.target.value.replace(/[^0-9.]+/g, ''));
  };

  (0, _react.useEffect)(function () {
    getPlaces();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "order-type",
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: logo
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListTitle, null, t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')), orderTypes && orderTypes.map(function (item, i) {
    var _orderStatus$options;

    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListItemContainer, {
      key: i,
      bgimage: item === null || item === void 0 ? void 0 : item.image,
      onClick: function onClick() {
        return handleClickOrderType({
          value: item.value,
          text: item.text,
          label: item.label
        });
      },
      active: (orderStatus === null || orderStatus === void 0 ? void 0 : (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type) === (item === null || item === void 0 ? void 0 : item.value)
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeTitle, null, item.text), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeDescription, null, item.description), /*#__PURE__*/_react.default.createElement(_styles.OrderStartWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('START_MY_ORDER', 'start my order')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)));
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.open,
    onClose: function onClose() {
      return setOrderTypeSelected(_objectSpread(_objectSpread({}, orderTypeSelected), {}, {
        open: false
      }));
    },
    hideCloseDefault: true
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_BsArrowLeft.default, {
    size: 20,
    onClick: function onClick() {
      return setOrderTypeSelected(_objectSpread(_objectSpread({}, orderTypeSelected), {}, {
        open: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.TypeContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.type), /*#__PURE__*/_react.default.createElement("label", null, orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.label), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: "#",
    onChange: function onChange(e) {
      return onChangePlaceId(e);
    },
    type: "text",
    ref: inputRef,
    min: 0
  })), /*#__PURE__*/_react.default.createElement(_styles.Table, null, places.length > 0 && /*#__PURE__*/_react.default.createElement("h2", null, t('AVAILABLE_PLACES', 'Available places')), places.map(function (place) {
    return /*#__PURE__*/_react.default.createElement(_styles.PlaceName, {
      key: place.id,
      isDisabled: !place.enabled
    }, place.name, " #", place.id);
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    style: {
      width: '100%'
    },
    onClick: handleChangePlace
  }, t('CONTINUE', 'Continue')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    }
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

exports.OrderTypeSelectorContentUI = OrderTypeSelectorContentUI;

var OrderTypeSelectorContent = function OrderTypeSelectorContent(props) {
  var _theme$images, _theme$images2, _theme$images2$dummie, _theme$images3, _theme$images3$delive, _theme$images4, _theme$images4$delive, _theme$images5, _theme$images5$delive, _theme$images6, _theme$images6$delive;

  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var theme = (0, _styledComponents.useTheme)();

  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorContentUI,
    logo: ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo) || props.logo || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo),
    orderTypes: props.orderTypes || [{
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$delive = _theme$images3.deliveryTypes) === null || _theme$images3$delive === void 0 ? void 0 : _theme$images3$delive.pickUp
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$delive = _theme$images4.deliveryTypes) === null || _theme$images4$delive === void 0 ? void 0 : _theme$images4$delive.eatIn,
      label: t('TABLE_NUMBER', 'Table number')
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: (_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$delive = _theme$images5.deliveryTypes) === null || _theme$images5$delive === void 0 ? void 0 : _theme$images5$delive.curbside,
      label: t('Spot', 'Spot')
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      image: (_theme$images6 = theme.images) === null || _theme$images6 === void 0 ? void 0 : (_theme$images6$delive = _theme$images6.deliveryTypes) === null || _theme$images6$delive === void 0 ? void 0 : _theme$images6$delive.driveThru
    }]
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};

exports.OrderTypeSelectorContent = OrderTypeSelectorContent;